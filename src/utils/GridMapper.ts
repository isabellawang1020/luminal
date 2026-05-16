export interface GridCell {
  col: number;
  row: number;
}

export interface WallBounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  z: number;
}

export interface RectLike {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class GridMapper {
  constructor(
    public readonly bounds: WallBounds,
    public readonly width: number,
    public readonly height: number,
  ) {}

  index(cell: GridCell): number {
    return cell.row * this.width + cell.col;
  }

  isInside(cell: GridCell): boolean {
    return cell.col >= 0 && cell.col < this.width && cell.row >= 0 && cell.row < this.height;
  }

  worldToCell(x: number, y: number): GridCell | null {
    if (x < this.bounds.minX || x > this.bounds.maxX || y < this.bounds.minY || y > this.bounds.maxY) {
      return null;
    }

    const u = (x - this.bounds.minX) / (this.bounds.maxX - this.bounds.minX);
    const v = (y - this.bounds.minY) / (this.bounds.maxY - this.bounds.minY);
    const col = Math.min(this.width - 1, Math.max(0, Math.floor(u * this.width)));
    const row = Math.min(this.height - 1, Math.max(0, Math.floor(v * this.height)));
    return { col, row };
  }

  cellToWorld(cell: GridCell): { x: number; y: number } {
    const x = this.bounds.minX + ((cell.col + 0.5) / this.width) * (this.bounds.maxX - this.bounds.minX);
    const y = this.bounds.minY + ((cell.row + 0.5) / this.height) * (this.bounds.maxY - this.bounds.minY);
    return { x, y };
  }

  rectToCells(rect: RectLike): { minCol: number; maxCol: number; minRow: number; maxRow: number } {
    const min = this.worldToCell(rect.x - rect.width / 2, rect.y - rect.height / 2) ?? { col: 0, row: 0 };
    const max = this.worldToCell(rect.x + rect.width / 2, rect.y + rect.height / 2) ?? {
      col: this.width - 1,
      row: this.height - 1,
    };

    return {
      minCol: Math.min(min.col, max.col),
      maxCol: Math.max(min.col, max.col),
      minRow: Math.min(min.row, max.row),
      maxRow: Math.max(min.row, max.row),
    };
  }
}
