import ROBOT_ICON from "../assets/robot.svg";
const ChatMessage = () => {
  return (
    <div className="MESSAGE_BOX flex items-start justify-end gap-1 ml-4 mr-2 my-4">
      <img src={ROBOT_ICON} alt="user-icon" className="USER_ICON w-7 h-7" />
      <div className="MESSAGE_BG bg-cream max-w-3/4  p-3 rounded-[20px]">
        <p className="MESSAGE_TEXT text-mainBlue font-light">
          Oslo, the capital of Norway, offers a variety of delicious food
          options reflecting the country's culinary traditions and international
          influences. Here are some dishes and foods you might want to try while
          in Oslo: Gravlaks: This is a traditional Norwegian dish of thinly
          sliced raw salmon cured in salt, sugar, and dill. It's often served
          with mustard sauce, bread, and boiled potatoes. Fårikål: Considered
          Norway's national dish, fårikål is a hearty stew made with lamb,
          cabbage, peppercorns, and often potatoes. It's especially popular
          during the autumn months. Kjøttkaker: These are Norwegian meatballs
          typically made with a mixture of ground beef and pork, seasoned with
          spices like nutmeg and allspice. They're often served with gravy,
          potatoes, and lingonberry sauce. Brunost: Also known as "brown cheese"
          or "whey cheese," brunost is a uniquely Norwegian cheese made from
          whey and caramelized milk.
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
