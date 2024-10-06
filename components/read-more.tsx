import { FaArrowRight} from 'react-icons/fa'
import {Button} from "@nextui-org/react";

export const ReadMore = () => {
    return (
        <div className="flex gap-4 items-center">
      <Button color="default" variant='ghost' endContent={<FaArrowRight/>}>
        Read More
      </Button>    
    </div>
    )
}