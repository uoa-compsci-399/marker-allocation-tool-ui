interface DetailSectionProps {
  title: string;
  value: string;
}

const DetailSection = ({ title, value }: DetailSectionProps): JSX.Element => {
  return (
    <div className="mx-32 mb-4">
      <div className="mb-1 ml-4 text-2xl font-semibold">{title}</div>
      <div className="mb-2 border-t-2"></div>
      <div className="mb-12 ml-4 text-xl">{value}</div>
    </div>
  );
};

export default DetailSection;
