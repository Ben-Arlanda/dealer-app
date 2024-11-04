interface CardImageProps {
  src: string;
  alt: string;
}

interface CardHeaderProps {
  title: string;
}

interface CardBodyProps {
  text: string;
  extraText?: string;
}

interface ButtonProps {
  label: string;
  type?: 'button';
  onClick: () => void;
}

interface CardProps {
  card: {
    id: number;
    title: string;
    text: string;
    image: string;
    extraText?: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return <img src={src} alt={alt} />;
};

export const CardHeader = ({ title }: CardHeaderProps) => {
  return <div className="mt-3 text-black font-bold md:text-lg text-xs px-4 mb-2 w-32">{title}</div>;
};

export const CardBody = ({ text, extraText }: CardBodyProps) => {
  return (
    <div className="px-4 md:h-28 h-16 overflow-hidden md:text-xs text-xxs">
      <p>{text}</p>
      {extraText && <p className="mt-2">{extraText}</p>}
    </div>
  );
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className=" flex justify-center items-center">
      <button
        className="bg-indigo-500 rounded-2xl md:text-xs text-xxs pr-7 pl-7 pt-1.5 pb-1.5 font-semibold text-white w-56 transition-transform transform hover:scale-105 mt-2 py-3"
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    </div>
  );
};

export const Card = ({ card, isActive, onClick }: CardProps) => {
  return (
    <div
      className={`pb-3 h-82 w-64  text-slate-600 rounded-xl shadow-2xl overflow-hidden ${isActive ? 'border-4 border-blue-500' : 'border border-gray-300'}`}
    >
      <CardImage src={card.image} alt={card.title} />
      <CardHeader title={card.title} />
      <CardBody text={card.text} extraText={card.extraText} />
      <Button onClick={onClick} label="Button" />
    </div>
  );
};
