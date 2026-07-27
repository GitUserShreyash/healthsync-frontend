export default function SummaryCard({
  title,

  value,

  unit,

  icon,
}) {
  return (
    <div
      className="
bg-white
rounded-2xl
p-6
border
shadow-sm
"
    >
      <div
        className="
flex
justify-between
"
      >
        <div>
          <p
            className="
text-gray-500
text-sm"
          >
            {title}
          </p>

          <h2
            className="
text-3xl
font-bold
mt-2"
          >
            {value}

            <span
              className="
text-sm
ml-2
text-gray-500"
            >
              {unit}
            </span>
          </h2>
        </div>

        <div
          className="
text-3xl"
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
