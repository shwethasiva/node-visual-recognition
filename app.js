var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  api_key: 'edadbcfa3cff720594fad1ddc004eb533e15d061',
  version: '2016-05-20'
});

var params = {
  images_file: fs.createReadStream('./resources/Shwetha.jpg')
};

visualRecognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});
