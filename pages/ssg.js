import dayjs from 'dayjs';
import Layout from '../components/layout';

const Static = ({ ...props }) => {
	return <Layout>{props.date}</Layout>;
};

export const getStaticProps = () => {
	const date = dayjs().format('YY-MM-DD HH:mm:ss');

	return {
		props: { date: date },
	};
};

export default Static;
