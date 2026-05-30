import type { GridCell } from '@/utils/GridMapper';

const NEIGHBORS: Array<[number, number]> = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

function key(cell: GridCell, width: number): number {
  return cell.row * width + cell.col;
}

function isWalkable(mask: Uint8Array, width: number, cell: GridCell): boolean {
  const index = key(cell, width);
  return index >= 0 && index < mask.length && mask[index] === 1;
}

export function findNearestWalkable(
  mask: Uint8Array,
  width: number,
  height: number,
  target: GridCell,
  maxRadius = 16,
): GridCell | null {
  if (isWalkable(mask, width, target)) {
    return target;
  }

  for (let radius = 1; radius <= maxRadius; radius += 1) {
    for (let dy = -radius; dy <= radius; dy += 1) {
      for (let dx = -radius; dx <= radius; dx += 1) {
        if (Math.abs(dx) !== radius && Math.abs(dy) !== radius) {
          continue;
        }

        const cell = { col: target.col + dx, row: target.row + dy };
        if (cell.col < 0 || cell.col >= width || cell.row < 0 || cell.row >= height) {
          continue;
        }
        if (isWalkable(mask, width, cell)) {
          return cell;
        }
      }
    }
  }

  return null;
}

/**
 * Line-of-sight 检查：两个 cell 之间的直线（Bresenham）是否全在 walkable cell 上。
 */
export function hasLineOfSight(
  mask: Uint8Array,
  width: number,
  a: GridCell,
  b: GridCell,
): boolean {
  let x0 = a.col, y0 = a.row;
  const x1 = b.col, y1 = b.row;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  while (true) {
    if (mask[y0 * width + x0] !== 1) return false;
    if (x0 === x1 && y0 === y1) return true;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
}

/**
 * 路径压平：用 line-of-sight 贪心简化。
 * 对每个点贪心找最远可见点，去掉中间冗余拐点（如 BFS 选爬阶梯路径，能简化为直线）。
 */
export function losSimplifyPath(
  path: GridCell[],
  mask: Uint8Array,
  width: number,
): GridCell[] {
  if (path.length <= 2) return path;
  const result: GridCell[] = [path[0]];
  let i = 0;
  while (i < path.length - 1) {
    let j = path.length - 1;
    // 找从 i 看得到的最远 j
    while (j > i + 1 && !hasLineOfSight(mask, width, path[i], path[j])) {
      j -= 1;
    }
    result.push(path[j]);
    i = j;
  }
  return result;
}

export function simplifyPath(path: GridCell[]): GridCell[] {
  if (path.length <= 2) {
    return path;
  }

  const simplified: GridCell[] = [path[0]];
  let previousDirection: [number, number] | null = null;

  for (let index = 1; index < path.length; index += 1) {
    const current = path[index];
    const previous = path[index - 1];
    const direction: [number, number] = [current.col - previous.col, current.row - previous.row];

    if (previousDirection && direction[0] === previousDirection[0] && direction[1] === previousDirection[1]) {
      simplified[simplified.length - 1] = current;
    } else {
      simplified.push(current);
      previousDirection = direction;
    }
  }

  return simplified;
}

/**
 * BFS 寻路：8 邻居等权。简单可靠。
 * 注意：可能找出"爬阶梯绕远"的"少 cell 路径"，需要在 Level 层处理（如限制垂直 cell 数或后处理路径）。
 */
export function findPath(
  mask: Uint8Array,
  width: number,
  height: number,
  start: GridCell,
  end: GridCell,
): GridCell[] | null {
  if (!isWalkable(mask, width, start) || !isWalkable(mask, width, end)) {
    return null;
  }

  const queue: GridCell[] = [start];
  const visited = new Uint8Array(width * height);
  const previous = new Int32Array(width * height);
  previous.fill(-1);
  visited[key(start, width)] = 1;

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) break;
    if (current.col === end.col && current.row === end.row) {
      const result: GridCell[] = [];
      let pointer = key(end, width);
      while (pointer !== -1) {
        result.push({ col: pointer % width, row: Math.floor(pointer / width) });
        pointer = previous[pointer];
      }
      return simplifyPath(result.reverse());
    }
    for (const [dx, dy] of NEIGHBORS) {
      const next = { col: current.col + dx, row: current.row + dy };
      if (next.col < 0 || next.col >= width || next.row < 0 || next.row >= height) continue;
      const nextKey = key(next, width);
      if (visited[nextKey] === 1 || mask[nextKey] !== 1) continue;
      visited[nextKey] = 1;
      previous[nextKey] = key(current, width);
      queue.push(next);
    }
  }
  return null;
}
