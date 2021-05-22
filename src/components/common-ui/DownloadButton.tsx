import logo from './assets/download.svg';

interface BasicButtonProps {
  downloadLink: any;
  title: string;
}

const DownloadLink = ({ downloadLink, title }: BasicButtonProps): JSX.Element => {
  //TODO: create download link that fetched requested file from api

  return (
    <button className="flex px-4 py-4 ">
      <a href="/">
        <div className={`w-50 text-xl hover:text-blue-700 hover:font-bold py-2 rounded`}>
          {title}
          <img src={logo} alt="Download" className="px-2 max-h-6" />
        </div>
      </a>
    </button>
  );
};

export default DownloadLink;
