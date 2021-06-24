import { IRoute } from './../models/navigation';

export const onPress = (navigation: any, el: IRoute, isFocused: boolean) => {
  const event = navigation.emit({
    type: 'tabPress',
    target: el.key,
    canPreventDefault: true,
  });

  if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(el.name);
  }
};
