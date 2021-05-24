import logo from './assets/download.svg';
import useFetchPDF from 'hooks/useFetchPDF';

interface BasicButtonProps {
  downloadLink: string;
  title: string;
  name?: string;
}

const DownloadLink = ({ downloadLink, title, name }: BasicButtonProps): JSX.Element => {
  const [pdf] = useFetchPDF(downloadLink);
  return (
    <button className="flex px-4 py-4 ">
      <a href={`${pdf}`} download={`${name} - ${title}.pdf`}>
        <div className={`w-50 text-xl hover:text-blue-700 hover:font-bold py-2 rounded`}>
          {title}
          <img src={logo} alt="Download" className="px-2 max-h-6" />
        </div>
      </a>
    </button>
  );
};

export default DownloadLink;
