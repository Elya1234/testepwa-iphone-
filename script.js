icons: [
    {
      src: path.resolve('src/assets/icons/ios-icon.png'),
      sizes: [120, 152, 167, 180, 1024],
      destination: path.join('icons', 'ios'),
      ios: true
    },
    {
      src: path.resolve('src/assets/icons/ios-icon.png'),
      size: 1024,
      destination: path.join('icons', 'ios'),
      ios: 'startup'
    },
    {
      src: path.resolve('src/assets/icons/android-icon.png'),
      sizes: [36, 48, 72, 96, 144, 192, 512],
      destination: path.join('icons', 'android')
    }
  ]