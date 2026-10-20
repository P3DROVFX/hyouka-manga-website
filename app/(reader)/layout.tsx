export default function Reader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>Reader</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
