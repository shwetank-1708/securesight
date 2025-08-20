interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="text-secondary hover:text-primary bg-white font-bold p-4 rounded-xl shadow-custom text-xl">
        {text}
      </button>
    </div>
  );
};

export default Button;
