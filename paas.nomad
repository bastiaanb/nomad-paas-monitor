job "paas-monitor" {
	datacenters = ["dc1"]
	group "paas-monitor" {
		task "paas-monitor" {
			env {
				NODE_UNIQUE_ID = "${node.unique.id}"
				NODE_UNIQUE_NAME = "${node.unique.name}"
				NODE_DATACENTER = "${node.datacenter}"
				NODE_CLASS = "${node.class}"
				ATTR_ARCH = "${attr.arch}"
				ATTR_OS_NAME = "${attr.os.name}"
				ATTR_OS_VERSION = "${attr.os.version}"
				ATTR_KERNEL_NAME = "${attr.kernel.name}"
				ATTR_KERNEL_VERSION = "${attr.kernel.version}"
				ATTR_CPU_NUMCORES = "${attr.cpu.numcores}"
				ATTR_HOSTNAME = "${attr.hostname}"
				ATTR_DRIVER_DOCKER_VERSION = "${attr.driver.docker.version}"
			}

			driver = "docker"
			config {
				image = "eveld/nomad-paas-monitor:0.0.4"
				port_map {
					http = 80
				}
			}
			resources {
				cpu = 500
				memory = 256
				network {
					mbits = 10
					port "http" {
						static = 80
					}
				}
			}
		}
	}
}
