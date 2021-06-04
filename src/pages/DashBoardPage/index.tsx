import DashBoardCard from './DashBoardCard';
import { useUserContext } from 'context/UserContext';

const cardsData = [
  {
    title: 'Manage Courses',
    path: '/courses',
    useAnchor: false,
    imageSrc: '/images/dashboard/courses.png',
    body: {
      MarkerCoordinator: 'View, edit, and create courses',
      CourseCoordinator: 'View and edit your courses',
    } as Record<string, string>,
  },
  {
    title: 'Manage Markers',
    path: '/manage-markers',
    useAnchor: false,
    imageSrc: '/images/dashboard/manage-markers.png',
    body: {
      MarkerCoordinator: 'View and edit markers',
      CourseCoordinator: 'View and edit your courses',
    } as Record<string, string>,
  },
  {
    title: 'View Applications',
    path: '/saved-applications',
    useAnchor: false,
    imageSrc: '/images/dashboard/applications.png',
    body: {
      MarkerCoordinator: 'View applications',
      CourseCoordinator: 'View applications',
      Marker: 'View your applications',
    } as Record<string, string>,
  },
  {
    title: 'Manage Course Coordinators',
    path: '/coursecoordinators',
    useAnchor: false,
    imageSrc: '/images/dashboard/coursecoordinators.png',
    body: {
      MarkerCoordinator: 'View, edit and add course coordinators',
    } as Record<string, string>,
  },
  {
    title: 'Log in',
    path: `${process.env.REACT_APP_API_DOMAIN}/api/authn/login`,
    useAnchor: true,
    imageSrc: '/images/dashboard/login.png',
    body: {
      None: '',
    },
  },
];

const DashBoardViewPage = (): JSX.Element => {
  const { userData } = useUserContext();
  const currentRole = userData ? userData.role : 'None';

  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">Dashboard</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4">
        {cardsData.map((card) => {
          if (!(currentRole in card.body)) return null;
          return (
            <DashBoardCard
              key={card.path}
              title={card.title}
              path={card.path}
              body={card.body[currentRole]}
              imgURL={card.imageSrc}
              useAnchor={card.useAnchor || false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashBoardViewPage;
