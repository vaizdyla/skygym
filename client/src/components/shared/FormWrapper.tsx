interface IFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ title, children }: IFormWrapperProps) => {
  return (
    <div className="max-w-4xl mx-auto border border-b-gray-800 rounded-lg px-4 py-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  );
};
