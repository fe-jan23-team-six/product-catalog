export const disablePageScroll = (isDisabledScroll: boolean): void => {
  document.body.style.overflow = isDisabledScroll
    ? 'hidden'
    : '';
};
