import Image from "next/image";

type QuestionProps = {
    questions: string;
};

const Question = ({ questions }: QuestionProps) => {
    return (
       <div className="flex items-center justify-between gap-1.5 text-[15px] cursor-pointer mb-4.75 mt-4.75">
            <p style={{ fontFamily: "Kumbh Sans, sans-serif", }} className= " hover:text-[#F47B56] w-full" 
            >{questions}</p>
            
            <Image src="/Arrow.svg" alt="arrow" width={10} height={6} />
            
        </div >



    );
}

export default Question

