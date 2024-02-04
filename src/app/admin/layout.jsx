export default function RootLayout({ children }) {
  return (
    <div className="bg-primary w-screen h-screen overscroll-none text-white absolute top-0 right-0 bottom-0 left-0 ">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {children}
      </div>
    </div>
  );
}
