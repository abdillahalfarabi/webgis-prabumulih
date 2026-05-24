var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_polygon1polygon_2 = new ol.format.GeoJSON();
var features_polygon1polygon_2 = format_polygon1polygon_2.readFeatures(json_polygon1polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygon1polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon1polygon_2.addFeatures(features_polygon1polygon_2);
var lyr_polygon1polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygon1polygon_2, 
                style: style_polygon1polygon_2,
                popuplayertitle: 'polygon1 — polygon',
                interactive: true,
                title: '<img src="styles/legend/polygon1polygon_2.png" /> polygon1 — polygon'
            });
var format_titiklokasi1titiklokasi_3 = new ol.format.GeoJSON();
var features_titiklokasi1titiklokasi_3 = format_titiklokasi1titiklokasi_3.readFeatures(json_titiklokasi1titiklokasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titiklokasi1titiklokasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titiklokasi1titiklokasi_3.addFeatures(features_titiklokasi1titiklokasi_3);
var lyr_titiklokasi1titiklokasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titiklokasi1titiklokasi_3, 
                style: style_titiklokasi1titiklokasi_3,
                popuplayertitle: 'titiklokasi1 — titiklokasi',
                interactive: true,
                title: '<img src="styles/legend/titiklokasi1titiklokasi_3.png" /> titiklokasi1 — titiklokasi'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_polygon1polygon_2.setVisible(true);lyr_titiklokasi1titiklokasi_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_polygon1polygon_2,lyr_titiklokasi1titiklokasi_3];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_polygon1polygon_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_titiklokasi1titiklokasi_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Kelurahan': 'Kelurahan', 'Pengurus': 'Pengurus', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_polygon1polygon_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_titiklokasi1titiklokasi_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Kelurahan': 'TextEdit', 'Pengurus': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_polygon1polygon_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_titiklokasi1titiklokasi_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Kelurahan': 'no label', 'Pengurus': 'no label', });
lyr_titiklokasi1titiklokasi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});