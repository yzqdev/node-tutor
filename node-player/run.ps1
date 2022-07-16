
# 输出欢迎信息
function Write-Welcome {
    Write-Output "---------------------------------------------"
    Write-Output "正在下载中"
 
    Write-Output "---------------------------------------------"
    Write-Output ""  
}
$urlList = "https://i0.hdslb.com/bfs/new_dyn/cf60f461f4a9f74b9d5776279e70df1b1373037.jpg", "https://i0.hdslb.com/bfs/new_dyn/50f61457b5f1b69ec4ecac270d2870e81373037.jpg", "https://i0.hdslb.com/bfs/album/6a56ae9eee33de14fbae58308055f1f95d8d6805.jpg", "https://i0.hdslb.com/bfs/album/1c64a8a4b7937c498b37eae2b798491ff4b6d562.jpg", "https://i0.hdslb.com/bfs/album/0dd9cdc9eed1e1645e0c1bca12b77f3d8586c73f.jpg", "https://i0.hdslb.com/bfs/album/959c108bfd7388321f1468911c2deb4f9cf5ee0d.jpg", "https://i0.hdslb.com/bfs/album/f223a69083bc65b7ff7d6b831c596b4a6b22d7f9.jpg", "https://i0.hdslb.com/bfs/album/b361130f2e9e22c70de450295dadaf25654cf012.jpg", "https://i0.hdslb.com/bfs/album/8c0e79067a9890e56d95e9d3f9af310c0c299116.jpg", "https://i0.hdslb.com/bfs/album/5d92bfa33165ba11269e21d6b788ea6ef586f58a.jpg", "https://i0.hdslb.com/bfs/album/0a75a254e639e7ce606099e1d6c2b75582dc4e8a.jpg", "https://i0.hdslb.com/bfs/album/6a5c4818a0acf5807f0d75e0916fd38cbed0b183.jpg", "https://i0.hdslb.com/bfs/album/0c68d3ec11529096a9910e86d9e76651d5585c30.jpg", "https://i0.hdslb.com/bfs/album/1e3a1993aa58bb90c8a37fdcc68da64a6920b306.jpg", "https://i0.hdslb.com/bfs/album/6d5db3a87257dae53d8ee04da891261a92b5946a.jpg", "https://i0.hdslb.com/bfs/album/934aa079f7c1895b613b89cb5c35ca9292c79747.jpg", "https://i0.hdslb.com/bfs/album/54a6dc1540490fd6a27af880f83b1f35232389a5.jpg", "https://i0.hdslb.com/bfs/album/8b8784a26770bee9d3db0a05dba39eb628f5c253.jpg", "https://i0.hdslb.com/bfs/album/12d998ad9abb1c975824dd2ea3c4af3f090736cd.jpg", "https://i0.hdslb.com/bfs/album/1e4bf4c8240cab34d38f4e794e9ff749b10bf52e.jpg", "https://i0.hdslb.com/bfs/album/f2d1e3901580cf9d83799bb9892e479e781aa757.jpg", "https://i0.hdslb.com/bfs/album/4d02c3b0a1bd98e23bdda2e3c92101abd64287a4.jpg", "https://i0.hdslb.com/bfs/album/ef81a329c06927d98681c6ab91401bd84719881a.jpg", "https://i0.hdslb.com/bfs/album/cdd23cd79e5a860f8ff2c8c74ad920e4cd04ef37.jpg", "https://i0.hdslb.com/bfs/album/7cec0c90d16a5f8c50e3d9012a5228786f490d50.jpg", "https://i0.hdslb.com/bfs/album/699aa8fe5efc28d55095262dd74dcf0f229e4990.jpg", "https://i0.hdslb.com/bfs/album/e0d516732c9461973dbcd0a25c89a19294707553.jpg", "https://i0.hdslb.com/bfs/album/e3bcbc8451e4338281b58027ac38ab94b93d1591.jpg", "https://i0.hdslb.com/bfs/album/a30a93d4b6b01b0c02d836639c4d58d0eab2e959.jpg", "https://i0.hdslb.com/bfs/album/e0d516732c9461973dbcd0a25c89a19294707553.jpg", "https://i0.hdslb.com/bfs/album/cdd23cd79e5a860f8ff2c8c74ad920e4cd04ef37.jpg", "https://i0.hdslb.com/bfs/album/8f0f5435148c540b2eecf76c4c0aafb665c4d165.jpg", "https://i0.hdslb.com/bfs/album/a30a93d4b6b01b0c02d836639c4d58d0eab2e959.jpg", "https://i0.hdslb.com/bfs/album/699aa8fe5efc28d55095262dd74dcf0f229e4990.jpg", "https://i0.hdslb.com/bfs/album/2a435b8f72b485ce2cb24b3cb0eab81b29318750.jpg", "https://i0.hdslb.com/bfs/album/7cec0c90d16a5f8c50e3d9012a5228786f490d50.jpg", "https://i0.hdslb.com/bfs/album/ef81a329c06927d98681c6ab91401bd84719881a.jpg", "https://i0.hdslb.com/bfs/album/e3bcbc8451e4338281b58027ac38ab94b93d1591.jpg", "https://i0.hdslb.com/bfs/album/354059eefaec34789dc70c76267abcbd5253199f.jpg", "https://i0.hdslb.com/bfs/album/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg", "https://i0.hdslb.com/bfs/album/9dea4a014a934752ff3a3b81d744ba1433144181.jpg", "https://i0.hdslb.com/bfs/album/a1f94b8568c50b6df0f98d9244d06f8a7d3315c8.jpg", "https://i0.hdslb.com/bfs/album/9450494338e94d665b43a05ebfb120fbcc9485ab.jpg", "https://i0.hdslb.com/bfs/album/13b21559304709fa886198a66e5fcd0834957065.jpg", "https://i0.hdslb.com/bfs/album/8d5169a052fa19817cabd876f3616a8d658b9c76.jpg", "https://i0.hdslb.com/bfs/album/aee0616ef18ebd2b505c1ab41c30ea9f54cb6fe5.jpg", "https://i0.hdslb.com/bfs/album/1094f7fb4cc5c2a41366dbe5ca19011a510f579d.jpg", "https://i0.hdslb.com/bfs/album/9dea4a014a934752ff3a3b81d744ba1433144181.jpg", "https://i0.hdslb.com/bfs/album/354059eefaec34789dc70c76267abcbd5253199f.jpg", "https://i0.hdslb.com/bfs/album/185ca9e54910fd64a7b7a7704d62ff2f34ef7b3a.jpg", "https://i0.hdslb.com/bfs/album/d24357ae481a96adfcf14295328c9aba9732a31b.jpg", "https://i0.hdslb.com/bfs/album/13b21559304709fa886198a66e5fcd0834957065.jpg", "https://i0.hdslb.com/bfs/album/040e44e568a730efb87220475438ddd61373037.jpg", "https://i0.hdslb.com/bfs/album/5ea1c26863e4e5abc5837a7b85349ad4031f57f9.jpg", "https://i0.hdslb.com/bfs/album/92abb7949bca9ab459a54a41472a37d9c3862fd7.jpg", "https://i0.hdslb.com/bfs/album/50affdced6e4d4c8b5afef8a4eedabd78e816ca0.jpg", "https://i0.hdslb.com/bfs/album/2ac43619df2ae3dfa75a0bcf7390a0be99e50382.jpg", "https://i0.hdslb.com/bfs/album/a2ebf010bf535f997a988bc85a741f270160fb11.jpg", "https://i0.hdslb.com/bfs/album/f1e694eb2c490017edeba259431dab89408b69e2.jpg", "https://i0.hdslb.com/bfs/album/710a4e9171540c4dce24de59824289e104061ee9.jpg", "https://i0.hdslb.com/bfs/album/85241d25c316a4ad58fa6d7f803f264c0415ec4b.jpg", "https://i0.hdslb.com/bfs/album/d3dbc99a2f6b3cd6371c3105d13835535153329d.jpg", "https://i0.hdslb.com/bfs/album/31fdf56a2abe3ad5cec8d6f11d0d97ff0ea7ef18.jpg", "https://i0.hdslb.com/bfs/album/f23b2617c8cb64a7d50e1692350841ab20dab70c.png", "https://i0.hdslb.com/bfs/album/19609ef6d3a86368bb80f18d662bb2f012311cb8.jpg", "https://i0.hdslb.com/bfs/album/04f0e6f28070e4e052d561b30187e24ed2815711.jpg", "https://i0.hdslb.com/bfs/album/26ca67ae49a06a557ad1a5fa3372ec7ea514d907.jpg", "https://i0.hdslb.com/bfs/album/e70a897fa05845518ec8b7d7e20d50dd677c974f.jpg", "https://i0.hdslb.com/bfs/album/78eca14e9f2dacc13ecc2cae9f94644616fae1ec.jpg", "https://i0.hdslb.com/bfs/album/55e96abd389565b6185b78fdea5682473ebcf1dc.jpg", "https://i0.hdslb.com/bfs/album/b442de20358322d57e0a48135cde225359b41c11.jpg", "https://i0.hdslb.com/bfs/album/49e2deb116a4cfc7f1050da3a2f8bebfc14f12bb.jpg", "https://i0.hdslb.com/bfs/album/bec04895f3aed5c5d6ed2722304d164a25ec1ac6.jpg", "https://i0.hdslb.com/bfs/album/bec04895f3aed5c5d6ed2722304d164a25ec1ac6.jpg", "https://i0.hdslb.com/bfs/album/3411422f7f8564a15e45b33712e440814a662029.jpg", "https://i0.hdslb.com/bfs/album/8db81f9f16b4bef190fa67f51162dd3fb62b5d2c.jpg", "https://i0.hdslb.com/bfs/album/eb1e2f67df92f9ac47e70fbbdb88740c67d68fd1.jpg", "https://i0.hdslb.com/bfs/album/49e2deb116a4cfc7f1050da3a2f8bebfc14f12bb.jpg", "https://i0.hdslb.com/bfs/album/e70a897fa05845518ec8b7d7e20d50dd677c974f.jpg", "https://i0.hdslb.com/bfs/album/b442de20358322d57e0a48135cde225359b41c11.jpg", "https://i0.hdslb.com/bfs/album/b34dd93b0e62bf26addb49589194e6f63f0227c1.jpg", "https://i0.hdslb.com/bfs/album/2f7cfe79c26a3362ce9348b4e04c90bfea144bf3.jpg", "https://i0.hdslb.com/bfs/album/78eca14e9f2dacc13ecc2cae9f94644616fae1ec.jpg", "https://i0.hdslb.com/bfs/album/aea30a246da7fa4d3403d0bdc7863350bfd08e77.jpg", "https://i0.hdslb.com/bfs/album/a0e4c51a0053ebed80871f69120b873c7535aa4a.jpg", "https://i0.hdslb.com/bfs/album/55e96abd389565b6185b78fdea5682473ebcf1dc.jpg", "https://i0.hdslb.com/bfs/album/26ca67ae49a06a557ad1a5fa3372ec7ea514d907.jpg", "https://i0.hdslb.com/bfs/album/19609ef6d3a86368bb80f18d662bb2f012311cb8.jpg", "https://i0.hdslb.com/bfs/album/70d746697ac8d0df5c782f58318d39c4f6fc4a9b.jpg", "https://i0.hdslb.com/bfs/album/e0ffe02f2df55b064dc3224cb2e2c9611ec106c3.jpg", "https://i0.hdslb.com/bfs/album/97d3696d0cc9f0803364378b2295941a06132bf4.jpg", "https://i0.hdslb.com/bfs/album/7e87135d2ca35a5047670d431bd79e30005a4e0e.jpg", "https://i0.hdslb.com/bfs/album/cf40edd1e8d5faeee30e3555ec2d6ad6ce9e7815.jpg", "https://i0.hdslb.com/bfs/album/81aa1fad5be78e9d9e343135ddabad3996eb3db9.jpg", "https://i0.hdslb.com/bfs/album/ccdf5cac6c9a840fc303a6417bfee08a1d329da0.jpg", "https://i0.hdslb.com/bfs/album/e4da22f9b6cb677ba0e5829231a370baa3015210.jpg", "https://i0.hdslb.com/bfs/album/508f14b862e88d210c879a58f66dc07e45afb5a5.jpg", "https://i0.hdslb.com/bfs/album/3e6d5928de1f3c24ce83f437d55c40dcb13ff2e2.jpg", "https://i0.hdslb.com/bfs/album/7c0a0525c30eeed82dbc17b0d44927d619765c95.jpg", "https://i0.hdslb.com/bfs/album/0fa3ccf5622ab4b98404e93596cc493e9068ddb7.jpg", "https://i0.hdslb.com/bfs/album/681f38d8b458ae738a345ff503390cd8e8d0a6ed.jpg", "https://i0.hdslb.com/bfs/album/cf40edd1e8d5faeee30e3555ec2d6ad6ce9e7815.jpg", "https://i0.hdslb.com/bfs/album/97d3696d0cc9f0803364378b2295941a06132bf4.jpg", "https://i0.hdslb.com/bfs/album/81aa1fad5be78e9d9e343135ddabad3996eb3db9.jpg", "https://i0.hdslb.com/bfs/album/6f6d3f618389e46b29502ea2c7d6156d61a6acbd.jpg", "https://i0.hdslb.com/bfs/album/3b11c6a5952b1b0de30709dfdf77148f885526b5.jpg", "https://i0.hdslb.com/bfs/album/5a3c42f63ba3b080f937600b6fb7443702988365.jpg", "https://i0.hdslb.com/bfs/album/bb3965f16a39f6281686b82feea9957584d0dc23.jpg", "https://i0.hdslb.com/bfs/album/ffa46bcbbd45b709a9a8c40b856c8ad2c70192b2.jpg", "https://i0.hdslb.com/bfs/album/cb83c9822c244df7730b4b9a9224ecec6b9b8cfb.jpg", "https://i0.hdslb.com/bfs/album/91860d27384a94593d0fa44c3c04a2e2f12d5159.jpg", "https://i0.hdslb.com/bfs/album/3e6d5928de1f3c24ce83f437d55c40dcb13ff2e2.jpg", "https://i0.hdslb.com/bfs/album/7c0a0525c30eeed82dbc17b0d44927d619765c95.jpg", "https://i0.hdslb.com/bfs/album/8efe8719c969caa5fe374a5d221d0593620eae69.jpg", "https://i0.hdslb.com/bfs/album/f11ca247fa28d7984057d791640c57304f193d30.jpg", "https://i0.hdslb.com/bfs/album/d0556ebb44ccffddffc822b0a5d0673a6fce4b30.jpg", "https://i0.hdslb.com/bfs/album/423afbf033b1c141c77ebfdbfe9524302bcb212c.jpg", "https://i0.hdslb.com/bfs/album/9e1909664a060eaf374c9aef97b046f27eed3ab2.jpg", "https://i0.hdslb.com/bfs/album/9a83be0297403090d6adc2b93ff38ca84699e692.jpg", "https://i0.hdslb.com/bfs/album/294b1568da061e85fb4adf232a3596713eb53064.jpg", "https://i0.hdslb.com/bfs/album/cb64610cad883d776ceb6cfaf8ee975e3b039296.jpg", "https://i0.hdslb.com/bfs/album/09d77481eac3dac5bebe1c0076166914f79f31f2.jpg", "https://i0.hdslb.com/bfs/album/edac10d5b218cb30339674e6c790d54772a653e8.jpg", "https://i0.hdslb.com/bfs/album/508f14b862e88d210c879a58f66dc07e45afb5a5.jpg", "https://i0.hdslb.com/bfs/album/cb64610cad883d776ceb6cfaf8ee975e3b039296.jpg", "https://i0.hdslb.com/bfs/album/06a3b843061fdf2cd7d069d72edbfa5c29a0057e.jpg", "https://i0.hdslb.com/bfs/album/89aa5f63ae97c174a396b4079e73d803cf9f4434.jpg", "https://i0.hdslb.com/bfs/album/fdcd61221bc854762b3a21316007a70de7a18536.jpg", "https://i0.hdslb.com/bfs/album/423afbf033b1c141c77ebfdbfe9524302bcb212c.jpg", "https://i0.hdslb.com/bfs/album/50662b9b69223bbbd342224d655127c3c642f3be.jpg", "https://i0.hdslb.com/bfs/album/09d77481eac3dac5bebe1c0076166914f79f31f2.jpg", "https://i0.hdslb.com/bfs/album/edac10d5b218cb30339674e6c790d54772a653e8.jpg", "https://i0.hdslb.com/bfs/album/f11ca247fa28d7984057d791640c57304f193d30.jpg", "https://i0.hdslb.com/bfs/album/9e1909664a060eaf374c9aef97b046f27eed3ab2.jpg", "https://i0.hdslb.com/bfs/album/d0556ebb44ccffddffc822b0a5d0673a6fce4b30.jpg", "https://i0.hdslb.com/bfs/album/a931a9e8b46ad162e01ac6339a1f53046e3b29a5.jpg", "https://i0.hdslb.com/bfs/album/02976d20160b15686b3ee626217ce2618240ac39.jpg", "https://i0.hdslb.com/bfs/album/dec615d69f257e9f7055a43b6989e9f50f671a41.jpg", "https://i0.hdslb.com/bfs/album/f7fde49448dde408663bde5adc707fba1d49b08a.jpg", "https://i0.hdslb.com/bfs/album/7a71e894b9509d79ebcf20bc31261dda18b9a567.jpg", "https://i0.hdslb.com/bfs/album/624eb9d9cd8bfdbcee0f11e730fa0a89ef3eb2ba.jpg", "https://i0.hdslb.com/bfs/album/3ac275997b526c936eabc81a5f62043902bb31a0.jpg", "https://i0.hdslb.com/bfs/album/eb6a32c71e28ecce040cf181e620eac99953827b.jpg", "https://i0.hdslb.com/bfs/album/5584872fb7225eb2cff2339e0077c4fa53f68a0e.jpg", "https://i0.hdslb.com/bfs/album/09529a032924f3d1bb4a828d4ff890ca78959d76.jpg", "https://i0.hdslb.com/bfs/album/8189e1a708f6e9b9016d8ad5b31ad6c1b8bb171b.jpg", "https://i0.hdslb.com/bfs/album/1ea4c1fa30c514de24e1bf750f17696e279cb839.jpg", "https://i0.hdslb.com/bfs/album/607240020e59b38f3416ef7e1ba74c2c0b42bd10.jpg", "https://i0.hdslb.com/bfs/album/bbe400f33944e41097b606f30b45bc2984106d5e.jpg", "https://i0.hdslb.com/bfs/album/6ce88c23fe0c9d23f3b472c4e3caea73dac6cd59.jpg", "https://i0.hdslb.com/bfs/album/d12dffcef3bbfb78e6352cad221ff8cff5a3f487.jpg", "https://i0.hdslb.com/bfs/album/87bb117624c7033c1c58708e9c917e69e6e75505.jpg", "https://i0.hdslb.com/bfs/album/a4b3e1c920ba5051575e6206a10b15d57a51e5d4.jpg", "https://i0.hdslb.com/bfs/album/5584872fb7225eb2cff2339e0077c4fa53f68a0e.jpg", "https://i0.hdslb.com/bfs/album/8189e1a708f6e9b9016d8ad5b31ad6c1b8bb171b.jpg", "https://i0.hdslb.com/bfs/album/28c8611badc350b4931012f92fff3c4487745d7f.jpg", "https://i0.hdslb.com/bfs/album/f7fde49448dde408663bde5adc707fba1d49b08a.jpg", "https://i0.hdslb.com/bfs/album/7a71e894b9509d79ebcf20bc31261dda18b9a567.jpg"
#region 接收输入

# 接收是否输入
function ReadInput_YesOrNo {
    param([string]$message, [switch]$defaultValue)
    while ($true) {
        $input = Read-Host $message
        if (![String]::IsNullOrWhiteSpace($input)) {
            if ($input -eq 'y' -or $input -eq 'n') {
                return $input -eq 'y'
            }
        }
        if ($defaultValue) {
            return $args -eq $true
        }
    }
}

# 接收文本输入
function ReadInput_Text {
    param([string]$message, [string]$defaultValue)
    while ($true) {
        $input = Read-Host $message
        if (![String]::IsNullOrWhiteSpace($input)) {
            return $input.Trim()
        }
        if ($defaultValue) {
            return $defaultValue
        }
    }
}

 

 
# 接收路径输入
function ReadInput_Path {
    param([string]$message, [string]$defaultValue, [bool]$createIfNotExist = $true)    
    $defaultMessage = $message
    $path = ""
    while ($true) {
        $input = Read-Host $message
        if (![String]::IsNullOrWhiteSpace($input)) {
            $path = $input.Trim()
        }
        elseif ($defaultValue) {
            $path = $defaultValue
        }
        else {
            $message = $defaultMessage
            continue
        }

        try {
            $dir = New-Object -TypeName System.IO.DirectoryInfo($path)   # 新建DirectoryInfo对象，如果抛出异常说明路径非法
            if ($createIfNotExist -and !$dir.Exists) {
                # 或者 Test-Path -Path $path 但无法识别路径中的括号
                $path = $dir.FullName
                New-Item -Path $path -ItemType Directory | Out-Null
            }
        }
        catch [System.ArgumentException], [System.IO.PathTooLongException] {
            $message = "该路径不合法，请重新输入"
            $path = ""
            continue
        }

        return $path
    }
}

#endregion

# 构建URL列表
 

[int]$script:completed = 0  # 下载完成数量
[int]$script:succeed = 0    # 下载成功数量

# 开始下载（普通方法）
function StartDownload {
    param([array]$urlList, [string]$path )
    $last = $urlList.Count
    $watch = Measure-Command {
        for ($i = 0; $i -lt $last; $i++) {
            DownloadItem -url $urlList[$i] -path $path 
            Start-Sleep -Milliseconds 200  # 延迟0.2秒
        }
    }
    $failed = $script:completed - $succeed
    $elapsed = [Math]::Round($watch.TotalMilliseconds / 1000, 2)  # 总计耗时（秒）
    Write-Output ""
    Write-Host "总共下载 $script:completed，成功 $script:succeed，失败 $failed，耗时 $elapsed s" -ForegroundColor Red -BackgroundColor Yellow
    $script:completed = 0
    $script:succeed = 0
}

# 下载单个文件
function DownloadItem {
    param([string]$url, [string]$path )
    $url_file = $url.Substring($url.LastIndexOf('/') + 1);
   
    try {
        $tmpFileName = [System.IO.Path]::GetTempFileName()
        $destFileName = [System.IO.Path]::Combine($path, $url_file)
        $watch = Measure-Command {
            # 下载文件到临时文件夹
            Invoke-WebRequest -Uri $url -Method Get  -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36" -TimeoutSec 120 -OutFile $tmpFileName
            # 将临时文件移动到目标文件夹
            Move-Item -Path $tmpFileName -Destination $destFileName -Force
        }
        $script:succeed += 1
        $fileLength = [Math]::Ceiling((Get-Item -LiteralPath $destFileName).Length / 1024.0)
        $elapsed = [Math]::Round($watch.TotalMilliseconds)
        # 下载成功！12.jpg - 115KB/2356ms
        Write-Host "下载成功！$url_file - $fileLength KB/$elapsed ms" -ForegroundColor Green
    }
    catch {
        Write-Error $PSItem.ToString()
    }
    finally {
        $script:completed += 1
    }
}

# 主函数 运行 AppStart 即可启动
function AppStart {
    Clear-Host
    Write-Welcome
  
    Write-Output ""

   
    if ($urlList.Count -gt 0) {
        Write-Output "URL列表如下:"
        foreach ($url in $urlList) {
            Write-Output "`t$url"
        }
        Write-Output ""
        if (ReadInput_YesOrNo -message "是否开始下载？(y/n)") {
            $path = ReadInput_Path -message "输入文件存储路径(例如 E:\imgs,不填为当前目录)" -defaultValue "./imgs"
            
            Write-Output ""
            StartDownload -urlList $urlList -path $path  
        }
    }
    else {
        Write-Warning "不能创建URL列表!"
    }
    Write-Output ""
    Write-Output "按任意键退出..."
    [System.Console]::ReadKey($true) | Out-Null
}

AppStart