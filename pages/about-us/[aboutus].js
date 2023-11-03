// our-domain.com/aboutUs
import { useRouter } from 'next/router';

const AboutUsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the team member by ID
  const teamMember = teamMember.find((member) => member.id === parseInt(id));

  if (!teamMember) {
    return <div>Developer doesn't exist</div>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>{teamMember.role}</p>
    </div>
  );
};

export default AboutUsPage;
