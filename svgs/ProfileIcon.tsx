const ProfileIcon = ({
  width = "2em",
  height = "2em",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinejoin="round"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
        />
        <circle cx="12" cy="7" r="3" />
      </g>
    </svg>
  );
};

export default ProfileIcon;