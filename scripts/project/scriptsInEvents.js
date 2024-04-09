


const scriptsInEvents = {

	async EventSheet1_Event21_Act1(runtime, localVars)
	{
		if (runtime.objects.Stone.getPickedInstances()[0].instVars["value"] == runtime.objects.Stone.getPickedInstances()[1].instVars["counterValue"]) {
			localVars.result = 1
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

