sed 's/$/\n/' Random.js index.js utils.js resize.js scene_flowergrass.js scene_landscape.js Particle.js brush.js mySketch.js mountains.js flowers.js frag_functions_default.js frag.js vert.js frag_texture.js > build/bundle_raw.js

cp p5.min.js build/p5.min.js
cp fxhash.js build/fxhash.js
cp styles.css build/styles.css
cd build
uglifyjs bundle_raw.js -o bundle.min.js  -c -m
rm bundle_raw.js
rm ../build.zip
zip -r ../build_$(date +"%Y-%m-%d_%H-%M").zip *