"""Render the existing V emblem as a multi-size Windows icon."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
target = root / 'src' / 'VocabDesk' / 'Assets' / 'vocab.ico'
target.parent.mkdir(parents=True, exist_ok=True)
scale = 4
size = 256 * scale
image = Image.new('RGBA', (size, size), (11, 18, 32, 255))
draw = ImageDraw.Draw(image)
draw.rounded_rectangle((32 * scale, 32 * scale, 224 * scale, 224 * scale),
                       radius=29 * scale, fill='#172337', outline='#6d96bd', width=5 * scale)
font_path = Path(r'C:\Windows\Fonts\georgia.ttf')
font = ImageFont.truetype(str(font_path), 153 * scale)
draw.text((128 * scale, 129 * scale), 'V', anchor='mm', font=font, fill='#f8fbff', stroke_width=0)
image = image.resize((256, 256), Image.Resampling.LANCZOS)
image.save(target, format='ICO', sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print(target)
