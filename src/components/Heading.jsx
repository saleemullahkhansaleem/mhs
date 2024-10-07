export default function Heading({ children, className }) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 ${className}`}
    >
      {children}
    </span>
  );
}
