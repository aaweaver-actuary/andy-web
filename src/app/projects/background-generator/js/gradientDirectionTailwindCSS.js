const gradientDirectionMap = {
  'top left': 'to-tl',
  'top right': 'to-tr',
  'bottom left': 'to-bl',
  'bottom right': 'to-br',
  left: 'to-l',
  right: 'to-r',
  top: 'to-t',
  bottom: 'to-b',
};

const gradientDirectionTailwindCSS = (
  gradientDirection,
  gradientDirectionMapping,
) => {
  Object.keys(gradientDirectionMapping).forEach((key) => {
    if (key === gradientDirection) {
      return gradientDirectionMapping[key];
    }

    return gradientDirectionMapping['bottom right'];
  });
};

export { gradientDirectionMap };
export default gradientDirectionTailwindCSS;
