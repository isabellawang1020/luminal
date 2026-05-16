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
    if (!current) {
      break;
    }

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
      if (next.col < 0 || next.col >= width || next.row < 0 || next.row >= height) {
        continue;
      }

      const nextKey = key(next, width);
      if (visited[nextKey] === 1 || mask[nextKey] !== 1) {
        continue;
      }

      visited[nextKey] = 1;
      previous[nextKey] = key(current, width);
      queue.push(next);
    }
  }

  return null;
}
