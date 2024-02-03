import './App.css';
import ProfileForm from './components/ProfileForm';

const users = [
  {
    id: 0,
    email: 'test@gmail.com',
    nickname: '김김김',
    profileImageUrl: 'string',
    createdAt: '2024-02-03T10:15:18.878Z',
    updatedAt: '2024-02-03T10:15:18.878Z',
  },
];

function App() {
  return (
    <div className="App">
      <ProfileForm users={users} />
    </div>
  );
}

export default App;
