import { useState } from "react";

function App() {
  const [value, setValue] = useState([
    {
      title: "About our Services",
      id: 1,
      display: false,
      content: "We're your one-stop shop for technical woes! From rescuing you from printer purgatory to wrangling a glitchy internet connection, our tech wizards are here to save the day. We speak fluent computer, so no need to decipher cryptic error messages. Worried about a smart home gone rogue? We can tame those tangled wires and make your devices sing in harmony. Don't let tech troubles hold you back – we'll get you back up and running in no time!"
    },
    {
      title: "Ambition of our services",
      id: 2,
      display: false,
      content: "Our tech gurus aim to banish your tech troubles!  They translate computer gibberish, tame smart home tantrums, and get you back online fast."
    },
    {
      title: "Our features",
      id: 3,
      display: false,
      content: "Frustrated with a flickering monitor? We fix that! Network running slow? We'll diagnose and optimize. Software glitches got you down? We'll troubleshoot and restore order.  Got a new gadget? We'll set it up and show you the ropes.  We offer remote support for quick fixes, or on-site visits for in-depth care."
    },
    {
      title: "Our Vision",
      id: 4,
      display: false,
      content: "Our vision? A world where technology empowers, not frustrates. We're constantly learning and innovating, developing cutting-edge solutions to stay ahead of the tech curve. Imagine a future where your devices seamlessly connect, and AI anticipates your needs. We're building that future, one happy customer (and fixed gadget) at a time"
    }
  ]);

  const handleChange = (id) => {
    setValue(prevValue => prevValue.map(item => 
      item.id === id ? { ...item, display: !item.display } : item
    ));
  };

  return (
    <div className="bg-slate-950 text-white p-2 justify-center w-full text-center min-h-screen">
      <h1 className="bg-green-600 rounded-sm p-2"> Welcome To Ask Doubt area</h1>
      {value.map(item => (
        <div className="my-2 transition-all duration-300 ease-in-out" key={item.id}>
          <div className="justify-center m-auto rounded-sm bg-neutral-400 w-[400px] p-2">
            <div className="flex flex-row gap-2 justify-center">
              <div>{item.title}</div>
              <button onClick={() => handleChange(item.id)}>{item.display ? "-" : "+"}</button>
            </div>
            <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: item.display ? '1000px' : '0' }}>
              <div className="p-2">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
