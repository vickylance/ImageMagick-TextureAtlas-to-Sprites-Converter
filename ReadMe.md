# ImageMagick-TextureAtlas-to-Sprites-Converter

## Installation

1. Install [ImageMagick](http://www.imagemagick.org/)
2. Clone and install this repo,
```
git clone git@github.com:vickylance/ImageMagick-TextureAtlas-to-Sprites-Converter.git
cd ImageMagick-TextureAtlas-to-Sprites-Converter
yarn
```

## Usage

1. Go to [Leshy Spritesheet Tool](https://www.leshylabs.com/apps/sstool/)
2. Upload a Texture Atlas.
3. Hit the `Remap` button.
4. (Optional) Combine any sprites that u want in the editor (Hold Shift + LMB). (Hint: Click the Checkered BG checkbox)
5. (Optional) Delete any unwanted or redundant sprites.
6. Hit `Optimize` button.
7. Hit `Repack` button.
8. (Optional) Change any names of of the sprites you want. (Hint: Click the show labels checkbox)
9. Give a name to the spritesheet and hit the `Save` button.
10. Select `JSON` from the dropdown below and give a name to the json file and hit `Save`.

```
 $ node converter.js
? Path to your input spritesheet? ./flappy.png
? Path to your JSON file? ./flappy.json
? Path to your output folder? out/
Your input is:
        Input Spritesheet:      /Users/sds-s.vignesh/Projects/personal-projects/Phaser/flappy-bird/flappy.png
        Input JSON File:        /Users/sds-s.vignesh/Projects/personal-projects/Phaser/flappy-bird/flappy.json
        Output folder:          /Users/sds-s.vignesh/Projects/personal-projects/Phaser/flappy-bird/out
```
