import dayjs from 'dayjs';
import Layout from '../components/layout';

const Server = ({ ...props }) => {
	return <Layout>{props.date}</Layout>;
};

export const getServerSideProps = () => {
	const date = dayjs().format('YY-MM-DD HH:mm:ss');

	return {
		props: { date: date },
	};
};

export default Server;
