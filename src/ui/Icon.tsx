import { FC } from 'react';
import { BiMoon, BiSun, BiSearchAlt2 } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';

const Icons = { BiMoon, BiSun, BiSearchAlt2, FaAngleDown };

type TypeIconName = keyof typeof Icons;

interface IIconProps {
  icon: TypeIconName;
}

export const Icon: FC<IIconProps> = ({ icon }) => {
  const IconComponent = Icons[icon];
  
  return <IconComponent />;
};
