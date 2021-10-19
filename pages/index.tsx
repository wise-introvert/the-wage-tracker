import { ReactElement, FC } from "react";
import { NextPage } from "next";

const Home: NextPage = (): ReactElement => {
  return (
    <div
      className={
        "md:h-screen w-100 bg-yellow-500 flex flex-col items-center justify-center md:px-60 px-5 py-4 text-center"
      }
    >
      <h1 className={"font-serif text-8xl text-black md:mb-8 mb-2"}>The Title</h1>
      <h1 className={"font-sans text-lg text-black mb-4 font-thin"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue
        felis id mauris suscipit feugiat. Donec auctor metus ac arcu tristique,
        in euismod metus porttitor. Mauris rutrum molestie ex et pharetra. Donec
        imperdiet sit amet urna in congue. Aliquam rhoncus, eros ut aliquam
        sollicitudin, leo turpis fermentum mauris, ut efficitur nunc erat non
        urna. Vivamus placerat quam ligula, luctus dapibus dolor convallis in.
        Proin tincidunt tortor elementum faucibus condimentum. Proin luctus
        mollis lacus. Ut fermentum rhoncus nibh eget elementum. Integer eget
        augue ligula. Aenean tempor auctor purus a pharetra. Curabitur et risus
        sed eros ultricies ultrices. Nulla nisi neque, fermentum sed varius in,
        pretium eget nunc. Maecenas ut aliquam turpis. Phasellus non leo nec
        ante rhoncus suscipit sed id dui. Proin mattis fermentum vehicula. Fusce
        ac laoreet ante, nec ultricies risus. Cras semper mi vitae facilisis
        sollicitudin. Aenean sed nisl eget lectus porttitor suscipit ut vitae
        urna. Aliquam auctor quam a elementum luctus.
      </h1>
      <h1
        className={
          "w-full  font-mono text-md text-black font-extrathin text-right text-opacity-50"
        }
      >
        {new Date().toISOString()}
      </h1>
    </div>
  );
};

export default Home;
