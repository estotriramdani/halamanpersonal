export default function Preloader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        height: '100vh',
      }}
    >
      <div id="loading"></div>
    </div>
  );
}
