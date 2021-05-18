export function BitFieldHelper(bitfield: number): string[] {
  const semesters: string[] = [];
  if (bitfield & 0x04) semesters.push('Semester Two');
  if (bitfield & 0x02) semesters.push('Semester One');
  if (bitfield & 0x01) semesters.push('Summer School');

  return semesters;
}

export function EncodeBitField(semesters: string[]): number {
  let bitField = 0;

  semesters.forEach((semester) => {
    switch (semester) {
      case 'Summer School':
        bitField += 1;
        break;
      case 'Semester One':
        bitField += 2;
        break;
      case 'Semester Two':
        bitField += 4;
        break;
      default:
        break;
    }
  });

  return bitField;
}
