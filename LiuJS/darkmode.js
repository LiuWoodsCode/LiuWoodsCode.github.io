// Function to apply theme with accent color
function applyThemeWithAccent(accentColor) {
  // Set the accent color and background color
  const backgroundColor = mixColors('#000000', accentColor, 0.8); // 80% mix of black

  // Apply the accent color to buttons and links
  document.querySelectorAll('button, a').forEach(el => {
    el.style.backgroundColor = accentColor;
    el.style.color = '#ffffff'; // Assuming you want white text on accent background
  });

  // Apply the mixed background color
  document.body.style.backgroundColor = backgroundColor;
}

// Utility function to mix two colors
function mixColors(color1, color2, weight) {
  // Convert hex to RGB
  function hexToRgb(hex) {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return rgb ? {
      r: parseInt(rgb[1], 16),
      g: parseInt(rgb[2], 16),
      b: parseInt(rgb[3], 16)
    } : null;
  }

  // Mix two RGB colors
  function mixRgbColors(rgb1, rgb2, weight) {
    const w = weight * 2 - 1;
    const w1 = (w + 1) / 2;
    const w2 = 1 - w1;
    const rgb = {
      r: Math.round(rgb1.r * w1 + rgb2.r * w2),
      g: Math.round(rgb1.g * w1 + rgb2.g * w2),
      b: Math.round(rgb1.b * w1 + rgb2.b * w2)
    };
    return rgb;
  }

  // Convert RGB back to hex
  function rgbToHex(rgb) {
    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
    return '#' + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
  }

  // Perform the color mixing
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const mixedRgb = mixRgbColors(rgb1, rgb2, weight);
  return rgbToHex(mixedRgb);
}

// Example usage:
// Set '#FF5733' as the accent color
applyThemeWithAccent('#FF5733');
