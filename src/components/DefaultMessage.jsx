import ROBOT_ICON from "../assets/robot.svg";

const DefaultMessage = () => {
return <div className="flex flex-col items-center gap-4">
<img className="w-14 h-14" src={ROBOT_ICON} alt="robot-icon" />
<p className="text-mainBlue text-xl">Hello, how can I help You?</p>
</div>
}

export default DefaultMessage