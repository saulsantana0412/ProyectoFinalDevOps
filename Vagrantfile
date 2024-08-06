Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"

  config.vm.define "HolaMundoWeb" do |holaMundoWeb|
    holaMundoWeb.vm.hostname = "HolaMundoWeb"
    holaMundoWeb.vm.network "private_network", ip: "192.168.56.20"
    holaMundoWeb.vm.provider "virtualbox" do |vb|
      vb.memory = 512
      vb.cpus = 1
    end
  end

  config.vm.synced_folder '.', '/vagrant', disabled: true
end
