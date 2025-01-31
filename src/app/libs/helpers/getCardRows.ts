export const groupIntoRows = (array: any[], size: number) => {
    const rows = [];
    for (let i = 0; i < array.length; i += size) {
      rows.push(array.slice(i, i + size));
    }
    return rows;
  };