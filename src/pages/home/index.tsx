import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home Page</h2>
      <Button onClick={() => navigate('/counter')}>Go to Counter</Button>
    </>
  );
}

export default HomePage;
