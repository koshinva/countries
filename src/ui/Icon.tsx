import { FC } from 'react';
import { BiMoon, BiSun, BiSearchAlt2, BiSolidTrophy } from 'react-icons/bi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FcGlobe } from 'react-icons/fc';

const Icons = {
  BiMoon,
  BiSun,
  BiSearchAlt2,
  BiSolidTrophy,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  HiOutlineArrowNarrowLeft,
  FcGlobe,
};

type TypeIconName = keyof typeof Icons;

interface IIconProps {
  icon: TypeIconName;
  fill?: string;
  className?: string;
}

export const Icon: FC<IIconProps> = ({ icon, fill, className }) => {
  const IconComponent = Icons[icon];

  return <IconComponent fill={fill} className={className} />;
};
