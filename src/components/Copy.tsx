type CopyProps = {
  title: string;
  content: string;
};
const Copy = ({ title, content }: CopyProps) => {
  return (
    <div>
      {title} {content}
    </div>
  );
};

export default Copy;
