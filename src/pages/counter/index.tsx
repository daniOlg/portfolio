import { ArrowDown, ArrowUp } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { RootState } from '@/store/store';

function CounterPage() {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      <h2>Counter Page</h2>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <ArrowUp />
        </Button>
        <Badge>{count}</Badge>
        <Button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <ArrowDown />
        </Button>
      </div>
      <Button onClick={() => navigate('/')}>Go to Home</Button>
    </div>
  );
}

export default CounterPage;
