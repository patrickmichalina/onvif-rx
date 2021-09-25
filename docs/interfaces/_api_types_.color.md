[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [Color](_api_types_.color.md)

# Interface: Color

Acceptable values:

						http://www.onvif.org/ver10/colorspace/YCbCr - YCbCr
							X attribute = Y value
								Y attribute = Cb value
								Z attribute = Cr value

						http://www.onvif.org/ver10/colorspace/RGB - RGB
							X attribute = R value
								Y attribute = G value
								Z attribute = B value

					If the Colorspace attribute is absent, YCbCr is implied.

					Deprecated values:

						http://www.onvif.org/ver10/colorspace/CIELUV - CIE LUV
						http://www.onvif.org/ver10/colorspace/CIELAB - CIE 1976 (L*a*b*)
						http://www.onvif.org/ver10/colorspace/HSV - HSV

## Hierarchy

* **Color**
