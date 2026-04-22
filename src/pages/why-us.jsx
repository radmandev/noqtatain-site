import profilePageUrl from './profile.html?url';

export default function Profile() {
  return (
    <iframe
      src={profilePageUrl}
      title="Company Profile"
      className="w-full border-0"
      style={{ minHeight: '100vh' }}
    />
  );
}
