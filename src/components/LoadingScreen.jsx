import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ onStart, started }) => {
  const { progress } = useProgress();

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Please help me!</h1>
        <button
          className="loadingScreen__button"
          onClick={onStart}
          disabled={progress < 100}
        >
          Start
        </button>
      </div>
    </div>
  );
};
