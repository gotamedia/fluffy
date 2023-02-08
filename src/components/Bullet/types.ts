import { SliderDirectionType } from '@components/Slider/types';
import type { StyledInterpolationFunction } from "@root/types/interpolationFunction";
import type { FC } from 'react';

interface BulletProps {
    ariaLabel: string
    active: boolean
    index: number
    dynamicBullets?: boolean
    direction?: SliderDirectionType
    activeIndex?: number
    onBulletClick: (index: number) => void
}

export type BulletStyledProps = {
    active: boolean,
    prevBullet?: boolean,
    nextBullet?: boolean,
    isDynamic?: boolean,
    left?: number,
    top?: number,
    direction: SliderDirectionType
}

type BulletComponent = FC<BulletProps>
type BulletStyleFn = StyledInterpolationFunction<BulletStyledProps>

export type {
    BulletProps,
    BulletComponent,
    BulletStyleFn
};

