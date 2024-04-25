import React from 'react';
import TextLink from "@/UI/TextLink/TextLink";
import ImageLink from "@/UI/ImageLink/ImageLink";

const LinkList = ({links, icons, classNameLink, classNameCurrentLink, classNameLinkImage, children}) => {
  return (
    icons
    ? <>
        {links.map((link, index) => {
          return (
            <ImageLink
              key={link.url}
              href={link.url}
              className={classNameLink}
              classNameCurrentLink={classNameCurrentLink}
              classNameImage={classNameLinkImage}
              src={icons[index].src}
              alt={icons[index].alt}
            />
          );
        })}
      </>
    : <>
        {links.map(link => {
          return (
            <TextLink
              key={link.url}
              href={link.url}
              className={classNameLink}
              classNameCurrentLink={classNameCurrentLink}
            >
              {link.title}
              {children}
            </TextLink>
          );
        })}
      </>
  );
};

export default LinkList;