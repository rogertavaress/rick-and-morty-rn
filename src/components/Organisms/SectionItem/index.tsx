import React, { memo } from "react";

import {
  ProfileImage,
  SectionInfo,
  SectionItemButton,
  SectionInfoContainer,
} from "../../Atoms";

import { FavoriteButton } from "../../Molecules";

import { SectionItemProps } from "./SectionItem.types";

export const SectionItem = memo(
  ({
    onPress,
    sectionTitle,
    id,
    image,
    title,
    subtitle,
    isFavorite,
    onFavoriteChange,
    testId,
  }: SectionItemProps) => {
    return (
      <SectionItemButton onPress={onPress} testId={testId}>
        <ProfileImage
          tag={`${id}-${sectionTitle}-tag`}
          image={image}
          testId={`${testId}-profile-image`}
        />
        <SectionInfoContainer>
          <SectionInfo type="title" value={title} testId={`${testId}-title`} />
          <SectionInfo
            type="subtitle"
            value={subtitle}
            testId={`${testId}-subtitle`}
          />
        </SectionInfoContainer>
        <FavoriteButton
          isFill={isFavorite}
          onPress={onFavoriteChange}
          testId={`${testId}-favorite-button`}
        />
      </SectionItemButton>
    );
  }
);
