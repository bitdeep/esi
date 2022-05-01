.PHONY: test compile clean cleanTest cleanCompile
SOL_FILES = $(shell find contracts -type f -name "*.sol")
TEST_FILES = $(shell find test -type f -name "*.ts")

COMPILE_HASH_FILE = .contractsHash
TEST_HASH_FILE = .testsHash

default: test

test: $(COMPILE_HASH_FILE) cleanTest $(TEST_HASH_FILE)

$(TEST_HASH_FILE): $(TEST_FILES)
	npx hardhat test --no-compile
	@ cat $^ | md5sum > $@

compile: $(COMPILE_HASH_FILE)

$(COMPILE_HASH_FILE): $(SOL_FILES)
	npm run baseCompile
	@ cat $^ | md5sum > $@

clean: cleanCompile cleanTest

cleanCompile:
	rm -f $(COMPILE_HASH_FILE)

cleanTest:
	rm -f $(TEST_HASH_FILE)
