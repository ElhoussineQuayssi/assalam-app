import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
    const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAkFBMVEUAcrz///8Ab7sAbroAbLoAarkAZrf5/f5podHc7faXt9qMsNfv9/vp8/lGjMc2icbv8/lTk8oUeb/O4/KtzuZaoNGpzOb1+PsthMS51OqBtdt0rthXmM3X6vVlmcytzuedxOKPvN8UfcGbwODC2+59qtUnhcWKut5JicVuqNUAYrZ3o9FXk8oAWbM0gMLN5fOpkVb4AAAEcUlEQVR4nO3ae3OiOhzGcUyCly3qEa33VrTYrt1z2vf/7k4gv1AE2Z05l+1k+v38sUNAO+YhN8JGEQAAAADgc5nYUa0rypjY6PZ5d1HbL3ZeDUucHRbWYTm5ro5S6Wx3XBx3s1S1Kqp0Or1sl9n2/i3Sv+2n/l/MsCeGV5Uxk00iF5LF1DS+dHoa+a/lw9Dbgjo9SF0G9QxUtBy4s+7fLKrXU1+S+sV8HXZTiLe9Gxmot9zd4/PwPHdH6UcI6qk8Nb4bnpfl0WgScgjqtLqVQeQiWERGm2hTHm+qDLSLbbSOtTYvrrecAu4OOuvdyEAf3annomb62RW2MibovesCu7goKTcubD7l1/8n1GRwIwN/dt4vi303YqzWcq9lAHGF2DWE3tm0/3oY+radP4yaGfQX7syyvNNR7Dp976ks6ntXGrtP++Io/pQK/HtlBfYPjQzUVBrHzt1b6fO+08vHN+7T6rs0o/tQh8W8aPDNdmC+SbXkhD5L+WzLaiarhqVksE6uMgmNudjfPn1t9YVc6vwoGfyQ8sG2A3MnhUwyeBtLZwh0ahgVt6/ZDtRJajX409VKP0rfeLCFeCMZHGUQrNZYsxAz0LafJ1PVymAilUrkAaJq/j27Tor98Z1kkM7lxC7AzqBOtjqZiZoZ+JH+Rgb2VpteVwZZgLNjnLmhvpmB2XZmcNHquTODPLzZUU1sze5stZsZ+OVALQO/nt4ave/MQFZUITF2cBsXD0KtDDbNDCYySNpFU9VRqgyqWWQVXAZ6Zn/2sKjHrzNYj36WwSbYDFSxPCqPvmwGplj77ctKf90MxtVA/lUzKOY/X8VfZ1DNjZlpZ1DNC+OwMlBr2wyWsrZtrQ+OnRnsjJp2ZjAPa31QLAFWcd/5yz87719tKY70rjMD+3ycdmawCCuDsiJ/eL5Wq6KwiaplUDuDqX1e6MzgJai1sjr1Os3t03BXBoPUNqH3rgyGYT0zncZ1vvqJPU42kUr907DfP/BvYXJbMH4Ttrl/kHwP7Nl5WuNnvsHuuSjZOi8aGfyoVbvaVGpmME8/s0L/gKr5mBdMUSzuu+yZXK4fJFfFmqraYVk09hOfwhoSr7X2E6NIhkl5o+Any1HZ2I0sH/LGjstzYF3hSjsDI7OjzHZ+0VQ+YVUDauIC0hdX3IS1QmpoZ+Dfw8rKr59cdXh9cJ93e6iy25AEuZtYUsaYj33lvi2Vp8sHa+u+KMbuTg/8e1WVui+Ub2D02u2vhPuaSe1fttud30Zebi0ZAtwwOJ5FKtqX1weXqpZa9lS2dmh9c6uDQ7ARRLE065pXd8Vc3NyQH3JpJLVa6olrCfOF/DeNLNiO8LMMbHeY117H5tOrRaA+HZKPr4wCWyFeU4/fmj5avB5m70UMg/enR9O40SqeHPOyRzwczmm4HaFQjInXahe1vb1pmrqD1jfdxfTmRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Hv8DcgtPEZIedWEAAAAAElFTkSuQmCC"
    return (
        <div className="mx-auto w-1/2 rounded shadow-lg border overflow-hidden mt-5 p-4 bg-white">
            <div className="relative pb-[60%]">
                <Image src={image} className="absolute object-cover h-full w-full" width={300} height={200} alt='photo'/>
            </div>
            <div className="p-4 text-sm font-medium text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores veniam. Vitae eum ipsum, aperiam vero facilis blanditiis tenetur, maxime, suscipit ullam velit necessitatibus. Saepe, cum consequuntur! Deleniti, nam amet!</div>
            <div className='flex flex-row justify-start items-center'>
                <button className='btn px-10 border border-black'>More</button>
            </div>
        </div>
    )
}

export default ProjectCard
